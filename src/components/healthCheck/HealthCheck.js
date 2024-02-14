import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {healthCheckActions} from "../../store/slice/healthCheckSlice";

import {HEALTH_CHECK_URL, ERROR_500_URL, DEFAULT_URL} from "../../config";
import axios from "axios";




const HealthCheck = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const checkServerHealth = async () => {
            let result = false;
            try {
                const response = await axios.get(HEALTH_CHECK_URL);

                console.log(response);

                if (response.status === 200 && response.statusText === 'OK') {
                    result = true;
                }
            } catch (error) {
                console.error('Error checking server health:', error);
            } finally {
                dispatch(healthCheckActions.setHealthCheck(result));
            }
            return result;
        };

        checkServerHealth().then((healthCheck) => {
            if (!healthCheck) {
                navigate(ERROR_500_URL);
            } else {
                navigate(DEFAULT_URL);
            }
        });
    }, [dispatch, navigate]);

    return (
        <></>
    );
};

export default HealthCheck;
