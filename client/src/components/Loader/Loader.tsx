
export const Loader = () => {

    return (
        <div className='loader' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width: '100vh'}}>
            <img src='/mars.gif' alt="loading..." style={{height: '100px', width: '100px',position: 'relative' }}/>
        </div>
    )
}