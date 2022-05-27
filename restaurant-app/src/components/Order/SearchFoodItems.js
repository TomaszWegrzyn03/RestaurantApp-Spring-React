import { IconButton, InputBase, List, ListItem, ListItemSecondaryAction, ListItemText, Paper } from "@mui/material";
import React,{useState,useEffect} from "react";
import { createApiEndpoint,ENDPOINTS} from "../../api"; 
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { create } from "@mui/material/styles/createTransitions";


const useStyles = makeStyles(theme => ({
    searchPaper: {
        
        padding:'2px 4px',
        display: 'flex',
        alignItems:'center',
    },
    searchInput:{
        flex:1,
    },
    searchButton:{
        position: 'relative'
    },
    listRoot:{
        marginTop: 2,
        maxHeight:450,
        overflow:'auto',
        '& li:hover':{
            cursor:'pointer',
            backgroundColor:"#E3E3E3"
        },
        '& li:hover .MuiButtonBase-root':{
            display: 'block',
            color:"#000"
        },
        '& .MuiButtonBase-root':{
            display:'none'
            
        },
        '& .MuiButtonBase-root:hover':{
            
            backgroundColor:"#transparent"
        }

    }
}))

    

export default function SearchFoodItems(props){

    const {addFoodItem, OrderedFoodItems} = props;
    const [foodItems,setFoodItems] = useState([])
    const [searchList, setSearchList] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const classes = useStyles()

    useEffect(()=>{
        createApiEndpoint(ENDPOINTS.FOODITEM).fetchAll()
        .then(res =>{
            setFoodItems(res.data)
            setSearchList(res.data);
        })
        .catch(err=>console.log(err))

    },[])

    useEffect(() =>{
        let x = [...foodItems];
        x = x.filter(y=>{
            return y.foodItemName.toLowerCase().includes(searchKey.toLocaleLowerCase())
            && OrderedFoodItems.every(item=> item.foodItemId != y.foodItemId)
        });
        setSearchList(x);

    },[searchKey, OrderedFoodItems])
    return(
        <>
        <Paper className={classes.searchPaper}>
            <InputBase className={classes.searchInput} value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder="Search Food Items"/>
            <IconButton>
                <SearchTwoToneIcon className={classes.searchButton}/>
            </IconButton>
        </Paper>
        <List className={classes.listRoot}>
            {
                searchList.map((item,idx)=>(
                    <ListItem key={idx}><ListItemText primary={item.foodItemName} secondary={"$"+item.price}/>
                    <ListItemSecondaryAction>
                        <IconButton onClick={e=>addFoodItem(item)}>
                            <PlusOneIcon/>  
                            <ArrowForwardIosIcon/>
                            </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>))
            }
        </List>
        </>
    )
}