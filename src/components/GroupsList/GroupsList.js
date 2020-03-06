import React from 'react';
import { connect } from "react-redux";
import styles from './GroupsList.module.css';
import {Link, useRouteMatch} from 'react-router-dom';
import { onDelete } from "../../store/actions/groups";


function GroupsList({ list, onDelete }) {
    
    const { url } = useRouteMatch();
    
    return (
        <div className = { styles.groups_wrap }>
            {
                list.map(item => <div className = { styles.link_wrap } key={item.id}>
                    <Link className = { styles.link } to = { `${url}/${item.id}` }>{item.name}</Link>
                    <button className = { styles.btn_del } onClick = { () => onDelete(item.id) }>DEL</button>
                </div>)
            }
        </div>
    );
}

function mapStateToProps(state) {
    return{
        list: state.groups.listGroups
    }
}

const mapDispatchToProps = {
    onDelete: onDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
