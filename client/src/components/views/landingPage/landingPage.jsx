import React, {useEffect, useState} from "react";
import axios from "axios";
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, TableBody, TableFooter, TableHead} from "@material-ui/core";
import "./css/landingpage.css";



const useStyles = makeStyles({
    img:{
        display:'block',width:'100%'
    },
    root: {
        padding:"100px 0"
    },
    paper :{
        padding:20,
        textAlign : 'center',
    },
    table :{
        border:"1px solid #ccc",
        borderCollapse : "collapse",background:"#868686"
    },
    item : {
      boxSizing :"border-box",
    },
    text:{
        textAlign:"center",padding:"20px 0",color:"#fff"
    },
    image_wrap:{
        maxWidth:"600px",margin:"0 auto"
    }

});


 function LandingPage(){
    const classes =useStyles();
    const [loadData,setLoadData] = useState([]);
    //랜딩페이지 시작
    useEffect(() => {
        getData();
    },[]);

    function getData(){
        axios.get('/api/hello')
            .then(res =>{
                console.log(res.data);
                setLoadData(res.data);
            })
            .catch((err) =>{
                console.log(err);
            });
    }



    return(

        <div>
            <div>
                <div className={classes.btn_wrap}>
                    <button type={"button"} className={'btn'}>버튼</button>
                </div>
                <div className={classes.image_wrap}>
                    <img className={classes.img} src={process.env.PUBLIC_URL + 'img/무제-2.png'} alt=""/>
                </div>
                {loadData ? (
                    <div className={classes.text}>
                        흠..{loadData.message} 흠..dd
                    </div>
                ) : null}
            }
            </div>
            <Grid container={true} item spacing={2} className={classes.root} >
                <Grid className={classes.item} item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 12
                    </Paper>
                </Grid>
                <Grid item={true} xs={6} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 6
                    </Paper>
                </Grid>
                <Grid item xs={6} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 6
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Paper className={classes.paper}>
                        xs = 3
                    </Paper>
                </Grid>
            </Grid>
            <table className={classes.table}>
                <TableHead></TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>
                        1
                    </TableCell>
                    <TableCell>
                        2
                    </TableCell>
                    <TableCell>
                        3
                    </TableCell>
                    <TableCell>
                        4
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        이름
                    </TableCell>
                    <TableCell>
                        성별
                    </TableCell>
                    <TableCell>
                        나이
                    </TableCell>
                    <TableCell>
                        직업
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        홍길동
                    </TableCell>
                    <TableCell>
                        남자
                    </TableCell>
                    <TableCell>
                        24세
                    </TableCell>
                    <TableCell>
                        개발자ssss
                    </TableCell>
                </TableRow>
                </TableBody>
                <TableFooter>

                </TableFooter>
            </table>
        </div>
    )
}
export default LandingPage;
