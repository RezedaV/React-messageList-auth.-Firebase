import React, {useEffect, useState} from 'react';
import {apiUrl} from "../../UTILS/constants";
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../store/articles/actions";
import {selectArticles, selectArticlesLoading, selectError} from "../../store/articles/selectors";

const Articles = () => {
   const dispatch = useDispatch();
   const error = useSelector(selectError);
   const isLoading = useSelector(selectArticlesLoading);
   const articles = useSelector(selectArticles);

    const getData = async () => {
        dispatch(getArticles());
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h3>Статьи</h3>
            <button onClick={getData}>Обновить данные</button>
            {error && <h4>Ошибка{error.message}</h4>}
            {isLoading ? (
                <CircularProgress />
            ) :(
                <ul>
                    {articles.map((art)=> (
                        <li key={art.id}>{art.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Articles;