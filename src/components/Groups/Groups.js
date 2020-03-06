import React from 'react';
import styles from './Groups.module.css';
import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';

//components
import GroupsList from '../GroupsList/GroupsList';
import GroupsForm from '../GroupsForm/GroupsForm';

function Groups() {
    
    const { path, url } = useRouteMatch();
    
    return (
        <div className = { styles.groups_wrap }>
            <div className = { styles.caption_wrap }>
                <h2 className ={ styles.caption }>Groups</h2>
                <Link className = { styles.btn_add } to = { `${url}/new` } >Add groups</Link>
            </div>
            <Switch>
                <Route exact path = {`${path}/`}>
                    <GroupsList />
                </Route>
                <Route
                    path = {`${path}/:id`}
                    render = {route => <GroupsForm id = {route.match.params.id} />}
                />
            </Switch>
        </div>
    );
}

export default Groups;
