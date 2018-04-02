import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }




    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (


            <form>

                <div className="container">
                    <div className="row">



                        <div className="col-md-12 ">

                            <div className="panel panel-primary">
                                <div className="panel-heading">  <h4 >User Profile</h4></div>
                                <div className="panel-body">

                                    <div className="box box-info">

                                        <div className="box-body">
                                            <div className="col-sm-5">



                                                <div className="previewComponent">
                                                    <div className="imgPreview">
                                                        {$imagePreview}
                                                    </div>
                                                    <form onSubmit={(e) => this._handleSubmit(e)}>
                                                        <input className="fileInput"
                                                            type="file"
                                                            onChange={(e) => this._handleImageChange(e)} />
                                                        <button className="submitButton"
                                                            type="submit"
                                                            onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                                                    </form>

                                                </div>







                                            </div>



                                            <br />

                                            {/* <!-- /input-group --> */}
                                        </div>
                                        <div className="col-sm-5">
                                            <h4 styles="color:#00b1b1;">Jennifer Andrade</h4>
                                            <span><p>Catcher</p></span>
                                        </div>
                                        <div className="clearfix"></div>
                                        <hr styles="margin:5px 0 5px 0;" />


                                        <div className="col-sm-5 col-xs-6 tital " >First Name:</div><div className="col-sm-7"><input type="text" placeholder="First Name"></input></div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>

                                        <div className="col-sm-5 col-xs-6 tital " >Last Name:</div><div className="col-sm-7"><input type="text" placeholder="Last Name"></input></div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>

                                        <div className="col-sm-5 col-xs-6 tital " >Email Address:</div><div className="col-sm-7"><input type="text" placeholder="Email Adress"></input></div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>

                                        <div className="col-sm-5 col-xs-6 tital " >Password:</div><div className="col-sm-7"><input type="text" placeholder="Password"></input></div>

                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>

                                        <div className="col-sm-5 col-xs-6 tital " >Position:</div><div className="col-sm-7"><input type="text" placeholder="Position"></input></div>

                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>

                                        <div className="col-sm-5 col-xs-6 tital " >Phone Number:</div><div className="col-sm-7"><input type="text" placeholder="Phone Number"></input></div>

                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>




                                        <button
                                            className="btn btn-primary pull-xs-right"
                                            type="submit"
                                            disabled={this.props.inProgress}
                                        >
                                            Edit Info
                  </button>

                                        <button
                                            className="btn btn-primary pull-xs-right"
                                            type="submit"
                                            disabled={this.props.inProgress}
                                        >
                                            Save
                  </button>


                                        {/* <!-- /.box-body --> */}
                                    </div>
                                    {/* <!-- /.box --> */}

                                </div>


                            </div>
                        </div>
                    </div>
                    {/* <script>
                            {function () {
                                ('#profile-image1').on('click', function () {
                                    ('#profile-image-upload').click();
                                });
                            }};
              </script> */}











                </div>

            </form>











        );


    }
}

export default Profile;