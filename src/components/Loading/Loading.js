import loading from './loading.gif'
import './Loading.css'
import actionCreator from '../../store/actionTypes';
import { CLOSE_LOADING } from '../../store/typesVar';
import { useDispatch } from 'react-redux';

const Loading = () =>{
    const dispatch = useDispatch()
    const closeLoading = () => {
        dispatch(actionCreator(CLOSE_LOADING));
      };
      setTimeout(closeLoading, 2000);
    return(
        <div className = 'loadingcss'>
            <img src={loading} className='gifLoading' alt="loading"/>
        </div>
    )
};

export default Loading