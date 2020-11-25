import React from 'react';
import Navbar from '../../Navbar'
import GenPost from './GenPost'
import Footer from '../../Footer'
import Cover from './Cover'

export default function Post(){
    return (
        <>
            <Navbar />
            <Cover />
            <GenPost />
            <Footer />
        </>
    );
}