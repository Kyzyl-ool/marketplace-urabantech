import React from 'react';
import './header.css';
import Box from "@material-ui/core/Box/Box";
import User from "../../resources/img/user.jpg"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Header = () => {

    function logout() {
        localStorage.clear();
        window.location = '/login';
    }

    return (
        <div className="header">
            <Box fontSize="h6.fontSize">
                <div className="prod-name">Startblock</div>
            </Box>
            <div className="user-info">
                <div className="user-name">Антон Печеркин</div>
                <img className="user-photo" src={User}/>
                <div className="logout-button"
                     onClick={() => logout()}
                >
                    Выйти
                </div>
            </div>
        </div>
    );
};

export default Header;