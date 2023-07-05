import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                    <span className='navbar-brand text-white mb-0 fs-1'>Star Wars Movie Reviews</span>
                </div>
            </nav>
        )
    }
}