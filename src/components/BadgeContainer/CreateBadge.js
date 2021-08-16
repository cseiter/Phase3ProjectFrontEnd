import React, {useState} from 'react'

export default function BadgeCreateForm({createBadge}) {
    const [formData, setFormData] = useState({badges_name: "", badges_is_earned: "", badges_is_eagle: "", scouts_id: null})

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createBadge(formData)
        setFormData({name: "", focus: ""})
    }


    return (
        <form>
            <label>Badge Name(separate with underscores): </label>
            <input onChange={handleChange} name="badges_name" value={formData.badges_name}/>
            <label>Earned?(yes/no): </label>
            <input onChange={handleChange} name="badges_is_earned" value={formData.badges_is_earned}/>
            <label>Eagle?(yes/no): </label>
            <input onChange={handleChange} name="badges_is_eagle" value={formData.badges_is_eagle}/>
            <button onClick={handleSubmit}>Create Badge</button>
        </form>
    )
}