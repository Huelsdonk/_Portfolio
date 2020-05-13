import React from 'react'
import { Mo } from '../components/MotionComp'
function Index() {
    return (
        <main className="container mt-3">
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-header">
                        <h1>About Me</h1>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 shadow-lg">
                    <img className="img-fluid" src="./../assets/IMG_5727.jpeg" alt="A John" />
                </div>
                <div className="col-sm-7">
                    <p>Hi, I'm John, a (hopefully) web developer. When I'm not building stuff, I like baking, tinkering with kitchen
                    cutlery, and goofing around with my kiddos. Thanks for taking a look at my site.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <hr className="my-4" />
                </div>


            </div>
                <div className="example-container">
                    <Mo />
                </div>
        </main>
    )
}
export default Index