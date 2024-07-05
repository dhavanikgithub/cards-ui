import React from 'react';
import PropTypes from 'prop-types';

const Card2 = ({ id, linerGradientStartColor, linerGradientEndColor, mainColor, contentTextColor, titleTextColor, isDark }) => {
    return (
        <div className={`container`} style={{ background: `linear-gradient(to top, ${linerGradientStartColor}, ${linerGradientEndColor})`, }}>
            <div className="content">
                <h1 className="ff-Outfit fw-600 fs-normal" style={{ color: `${titleTextColor}` }}>{id} AI image enhancer</h1>
                <p className="ff-Manrope fs-normal fw-400" style={{ color: `${contentTextColor}` }}>
                    Level up your image game! Our AI can expand images, change backgrounds, and turn any image into hi-fi or vector.
                </p>
                <button
                    onMouseOver={(e) => e.target.style.boxShadow = `${titleTextColor}E6 0px 0px 20px`}
                    onMouseOut={(e) => e.target.style.boxShadow = `rgba(0, 0, 0, 0.1) 0px 10px 20px`}
                    className={`button ff-Manrope fw-700 fs-normal `}
                    style={{ 
                        color: `${contentTextColor}`, 
                        backgroundColor: linerGradientStartColor, 
                        border: 'none', 
                        boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 20px` 
                        }}>
                    Enter playground
                </button>
                <p className="ff-Manrope fs-normal fw-400" style={{ width: '10%', height: '10%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                        <path fill={`${mainColor}`} d="m19.026,12v6c0,.552-.448,1-1,1s-1-.448-1-1v-6c0-.552.448-1,1-1s1,.448,1,1Zm-7.42-5.283l3.071,11.029c.175.63-.298,1.254-.953,1.254-.443,0-.831-.294-.952-.72l-.643-2.28h-5.206l-.643,2.28c-.12.426-.509.72-.952.72h0c-.654,0-1.128-.624-.953-1.254l3.091-11.108c.141-.608.541-1.12,1.098-1.405.568-.292,1.22-.31,1.839-.05.587.246,1.037.817,1.204,1.535Zm-.041,7.283l-1.929-6.835c-.029-.114-.191-.114-.219,0l-1.929,6.835h4.077Zm11.462-4c-.552,0-1,.448-1,1v8c0,1.654-1.346,3-3,3H5.026c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h8c.552,0,1-.448,1-1S13.578,0,13.026,0H5.026C2.269,0,.026,2.243.026,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-.552-.448-1-1-1Zm-6.85-4.82l1.868.787.745,1.865c.161.404.552.668.987.668s.825-.265.987-.668l.741-1.854,1.854-.741c.404-.161.668-.552.668-.987s-.265-.825-.668-.987l-1.854-.741-.741-1.854C20.601.265,20.21,0,19.776,0s-.825.265-.987.668l-.737,1.843-1.84.697c-.406.154-.678.54-.686.974-.008.435.25.83.65.999Z" />
                    </svg>
                </p>
            </div>
        </div>
    );
};



Card2.propTypes = {
    linerGradientStartColor: PropTypes.string.isRequired,
    linerGradientEndColor: PropTypes.string.isRequired,
    mainColor: PropTypes.string.isRequired,
    contentTextColor: PropTypes.string.isRequired,
    titleTextColor: PropTypes.string.isRequired,
};

export default Card2;
