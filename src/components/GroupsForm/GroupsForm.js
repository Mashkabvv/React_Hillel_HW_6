import React, {useState} from 'react';
import styles from './GroupsForm.module.css';
import { connect } from "react-redux";
import { onGroupSave } from '../../store/actions/groups'
import { useHistory } from 'react-router-dom'


function GroupsForm({item, onGroupSave}) {
    
    const  [name, setName] = useState(item.name);
    console.log(name);
    
    const  history = useHistory();
    
    function onSave() {
        onGroupSave({
            id: item.id,
            name
        });
        
        history.goBack();
    }
    
    return (
        <div className = { styles.form_wrap }>
            <input className = { styles.input } type="text" value = { name } onChange = { (e) => {setName(e.target.value)} } />
            <button className = { styles.btn_save } onClick = { onSave }>Save</button>
        </div>
    );
}

function mapStateToProps(state, { id }) {
    console.log(state.groups.listGroups, id);
    return{
        item: id !=='new' ? state.groups.listGroups.find(item => item.id == id) : {id:'', name: 'fill group\'s name'}
    };
}

const mapDispatchToProps = {
    onGroupSave: onGroupSave
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsForm);
