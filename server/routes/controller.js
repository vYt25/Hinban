const express = require('express')
const bodyParser = require('body-parser')
const oracledb = require('oracledb');
// const nano = require('nano')('http://localhost:5984')
// const myDB = nano.db.use('db_name');
const cors = require('cors')
const router = express.Router();


const knex = require('knex')({
    client: 'oracledb',
    connection: {
        user: 'IMPEX_USER',
        password: 'IMPEX',
        connectString: 'IMPEX',
        // multipleStatements: true
    },
    multipleStatements: true,
    fetchAsString: ['number', 'clob']
});
const STEP = require('knex')({
    client: 'oracledb',
    connection: {
        user: 'STEP',
        password: 'STEP',
        connectString: 'STP',
    },
    fetchAsString: ['number', 'clob']
});
router.use(cors()) //Cross-Origin Resource Sharing (CORS)
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('projectname - hello world - port5000')
});

router.post('/rowCount', (req, res) => {
    console.log(req.body.queryString)
    knex.raw(`SELECT COUNT(HINBAN_CODE) as rowCount FROM ME10_HINBAN WHERE UPD_DT > add_months(sysdate, -12) AND DEL_DT IS NULL AND HINBAN_C LIKE '${req.body.queryString}%'`)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
}),

    router.post('/oracleQuery', (req, res) => {
        // console.log(`SELECT B.* FROM 
        // (SELECT ROWNUM AS row_num,A.* FROM ME10_HINBAN A WHERE A.HINBAN_C LIKE '${req.body.queryString}%') B 
        // WHERE row_num BETWEEN ${(parseInt(req.body.skip) - 1) * parseInt(req.body.take)} AND ${req.body.skip > 1 ? (req.body.skip * req.body.take) : req.body.take} AND DEL_DT IS NULL `)


        knex.raw(`SELECT B.* FROM
            (SELECT ROWNUM AS row_num, A.* FROM ME10_HINBAN A WHERE A.HINBAN_C LIKE '${req.body.queryString}%' AND DEL_DT IS NULL AND UPD_DT > add_months(sysdate, -12)) B 
            WHERE row_num BETWEEN ${(parseInt(req.body.skip) - 1) * parseInt(req.body.take)} AND ${req.body.skip > 1 ? (parseInt(req.body.skip) * parseInt(req.body.take)) : req.body.take} `
        )
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.send(err)
            })

    }),


    module.exports = router;
