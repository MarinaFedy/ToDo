import React from "react";
import MySelect from './UI/selects/MySelect';
import MyInput from './UI/inputs/MyInput';

const NoteFilter = ({filter, setFilter}) =>{
    return(
        <div>
            <MyInput
                placeholder='Search...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorted"
                options={[
                    {value: 'title', name: "by title"},
                    {value: 'body', name: "by description"},
                    {value: 'deadline', name: "by deadline"}
                ]}
            />
        </div>
    )
}

export default NoteFilter;