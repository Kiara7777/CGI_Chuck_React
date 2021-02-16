import React, {useState} from "react";
import {
    Button,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment,
    makeStyles, MenuItem,
    Select,
    TextField,
    Tooltip
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    searchDiv: {
        display: "flex",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },

    searchInput: {
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary.main,
        },
        '& .MuiInputBase-input': {
            color: "#FFF",
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: "70%",
    },

    selectSearch: {
        width: "30%",
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary.main,
        },
        '& .MuiInputBase-input': {
            color: "#FFF",
        }
    },

    selectHelper: {
        color: theme.palette.secondary.dark,
    }
}));

const SEARCH_SELECT_ARRAY = ["Search by text", "Search by category"];

function SearchField(props){
    const classes = useStyles();

    const [searchText, setSearchText] = useState("");
    const [searchSelect, setSearchSelect] = useState(0);
    const [searchCategory, setSearchCategory] = useState("");

    const handleSearchField = event => {
        setSearchText(event.target.value);
    }

    const handleCleanButton = () => {
        setSearchText("");
    };

    const handleButtonSearch = () => {
        props.handleSearch(searchText);
    }

    const handleSelectSearch = (event) => {
        setSearchSelect(event.target.value);
        console.log(event.target);
    }

    const handleSearchCategory = event => {
        setSearchCategory(event.target.value);
        console.log(event.target);
    }

    return (
        <div className={classes.searchDiv}>
            <FormControl className={classes.selectSearch}>
                <Select
                    value={searchSelect}
                    onChange={handleSelectSearch}
                >
                    {
                        SEARCH_SELECT_ARRAY.map((item, index) => (
                            <MenuItem key={index} value={index}>
                                {item}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            {
                searchSelect === 0 ?
                    <TextField
                        className={classes.searchInput}
                        fullWidth
                        label=""
                        name="searchText"
                        value={searchText}
                        onChange={handleSearchField}
                        placeholder="Text search..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleCleanButton} disabled={!searchText} color="secondary">
                                        <ClearIcon fontSize="small"/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    :
                    <FormControl className={classes.searchInput}>
                        <Select
                            value={searchCategory}
                            onChange={handleSearchCategory}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                Category search...
                            </MenuItem>
                            {
                                props.categories.map((item, index) => (
                                    <MenuItem key={index} value={index}>
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
            }
            <Button variant="contained" color="secondary" onClick={handleButtonSearch}>
                Search
            </Button>
        </div>
    );
}

export default SearchField;

