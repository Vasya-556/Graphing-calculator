import './Style.css';

function LightDarkModeToggle(){
    return (
        <label className='switch'>
            <input type='checkbox' />
            <span className='slider'/>
        </label>
    );
}

export default LightDarkModeToggle;