import React from 'react'
import Service from './shipservices/Service'
import {services} from '../data/constants'
import Waves from './animation/Waves'
import SearchSection from './searchform/SearchSection'


const HomeComp = () => {


    const serviceCard = () => {
        return services.map(item => {
            return <Service
                id={item.id}
                color={item.color}
                title={item.title}
                content={item.content}
                icon={item.icon}
            />
        })
    }
    return (
        <>
        <section className='hero-section'>
            <div className='hero-head px-8 mb-[132px]'>
                <h1>Hassle-Free Shipping Solutions</h1>
                <h3>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</h3>
            </div>
            <SearchSection />
            <div className='services-section'>
                <div className="services">
                    <h2 className='mb-10'>Services</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8">
                        {serviceCard()}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomeComp