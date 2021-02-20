import React, {useState} from "react";
import clsx from 'clsx';
import {
    Button,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment,
    makeStyles, MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    searchDiv: {
        display: "flex",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },

    searchStyle: {
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary.main,
        },
        '& .MuiInputBase-input': {
            color: theme.palette.secondary.main,
        }
    },

    searchInput: {
        '& .MuiFormHelperText-root':{
            color: theme.palette.secondary.main,
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: "70%",
    },

    selectSearch: {
        width: "30%",
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
    const [error, setError] = useState(false);

    const handleSearchFields = event => {
        const {value, name} = event.target;
        setError(false);

        if(name === "selectSearch"){
            setSearchSelect(value);
        } else if (name === "searchText"){
            setSearchText(value);
        } else if (name === "selectCategory"){
            setSearchCategory(value);
        }

    }

    const handleCleanButton = () => {
        setSearchText("");
    };

    const handleButtonSearch = () => {
        if (searchSelect === 0) {
            if (searchText === "")
                setError(true);
            else
                props.handleTextSearch(searchText);
        }
        else if(searchSelect === 1)
            if(searchCategory === "")
                setError(true);
            else
                props.handleCategorySearch(props.categories[searchCategory]);

    }

    return (
        <div className={classes.searchDiv}>
            <FormControl className={clsx(classes.searchStyle, classes.selectSearch)}>
                <Select
                    name="selectSearch"
                    value={searchSelect}
                    onChange={handleSearchFields}
                    inputProps={{
                        'data-testid': 'selectSearchField',
                    }}
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
                        className={clsx(classes.searchStyle, classes.searchInput)}
                        error={error}
                        helperText={error && "Required"}
                        fullWidth
                        label=""
                        name="searchText"
                        value={searchText}
                        onChange={handleSearchFields}
                        placeholder="Text search..."
                        InputProps={{
                            'data-testid': 'searchTextField',
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
                    <FormControl className={clsx(classes.searchStyle, classes.searchInput)}>
                        <Select
                            value={searchCategory}
                            onChange={handleSearchFields}
                            displayEmpty
                            name="selectCategory"
                            error={error}
                            inputProps={{
                                'data-testid': 'selectCategoryField',
                            }}
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
                        <FormHelperText>{error && "Required"}</FormHelperText>
                    </FormControl>
            }
            <Button variant="contained" color="secondary" onClick={handleButtonSearch}>
                Search
            </Button>
        </div>
    );
}

export default SearchField;

