import ProfileHeader from '../../../components/headers/ProfileHeader';
import '../../../styles/influencer/influencer.container.scss';

import  React,{ useEffect }  from 'react';
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';
import axios from "axios";


export function ProfileMobile(){
    const { name } = useParams<{ name: string }>();

    const callApi = async () => {
        axios.get(`/influencer/${name}`).then((res) => console.log(res.data));
    }

    useEffect(() => {
        callApi();
    }, []);
    return (
        <div>
            <ProfileHeader />
            <div className='container'>
                <div className='post-list'>
                    <div className='post'>
                        동영상 container
                        <div className='post-title'>title</div>
                    </div>
                    <div className='post'>동영상 container</div>
                    <div className='post'>동영상 container</div>
                    <div className='post'>동영상 container</div>
                    <div className='post'>동영상 container</div>
                </div>
            </div>
        </div>
    );
}