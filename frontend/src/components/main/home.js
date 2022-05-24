import { Button, Card, CardContent, Paper, TextField } from '@mui/material';
import React from 'react';
import "./home.css"

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
   <h1>home component</h1>
   

  
  <div id="carousel-example-1z" class="carousel slide carousel-fade pt-4" data-ride="carousel">

   
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-1z" data-slide-to="1"></li>
      <li data-target="#carousel-example-1z" data-slide-to="2"></li>
    </ol>
  

    
    <div class="carousel-inner" role="listbox">

     
      <div class="carousel-item active">
        <div class="view" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg'); background-repeat: no-repeat; background-size: cover;">

          
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">

          
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p class="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p>

              <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" class="btn btn-outline-white btn-lg">Start free tutorial
                <i class="fas fa-graduation-cap ml-2"></i>
              </a>
            </div>
           

          </div>
          

        </div>
      </div>
      
      <div class="carousel-item">
        <div class="view" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg'); background-repeat: no-repeat; background-size: cover;">

         
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">

            
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p class="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p>

              <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" class="btn btn-outline-white btn-lg">Start free tutorial
                <i class="fas fa-graduation-cap ml-2"></i>
              </a>
            </div>
          
          </div>
        

        </div>
      </div>
      
      <div class="carousel-item">
        <div class="view" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg'); background-repeat: no-repeat; background-size: cover;">

         
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">

            
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p class="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p>

              <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" class="btn btn-outline-white btn-lg">Start free tutorial
                <i class="fas fa-graduation-cap ml-2"></i>
              </a>
            </div>
          

          </div>
          

        </div>
      </div>
      

    </div>
   
    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    

  </div>

  <main>
    <div class="container">

     
      <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">

        
        <span class="navbar-brand">Categories:</span>

        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">

        
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">All
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shirts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sport wears</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Outwears</a>
            </li>

          </ul>
         

          <form class="form-inline">
            <div class="md-form my-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </div>
        

      </nav>
      
      <section class="text-center mb-4">

      
        <div class="row wow fadeIn">

        
          <div class="col-lg-3 col-md-6 mb-4">

            
            <div class="card">

              
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body text-center">
                
                <a href="" class="grey-text">
                  <h5>Shirt</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Denim shirt
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>120$</strong>
                </h4>

              </div>
        

            </div>
           

          </div>
   

        
          <div class="col-lg-3 col-md-6 mb-4">

            
            <div class="card">

             
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" class="card-img-top" alt=""/>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body text-center">
               
                <a href="" class="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Sweatshirt</a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>139$</strong>
                </h4>

              </div>
             

            </div>

          </div>
          
          <div class="col-lg-3 col-md-6 mb-4">

            <div class="card">

              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
             
              <div class="card-body text-center">
             
                <a href="" class="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Grey blouse
                      <span class="badge badge-pill primary-color">bestseller</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>99$</strong>
                </h4>

              </div>
             

            </div>
            

          </div>
         
          <div class="col-lg-3 col-md-6 mb-4">

           
            <div class="card">

              
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
             
              <div class="card-body text-center">
               
                <a href="" class="grey-text">
                  <h5>Outwear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Black jacket</a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>219$</strong>
                </h4>

              </div>

            </div>
           

          </div>
         

        </div>
        
        <div class="row wow fadeIn">

         
          <div class="col-lg-3 col-md-6 mb-4">

         
            <div class="card">

              
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body text-center">
                
                <a href="" class="grey-text">
                  <h5>Shirt</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Denim shirt
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>120$</strong>
                </h4>

              </div>

            </div>
            
          </div>
         
          <div class="col-lg-3 col-md-6 mb-4">

          
            <div class="card">

            
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body text-center">
               
                <a href="" class="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Sweatshirt</a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>139$</strong>
                </h4>

              </div>
              

            </div>
            

          </div>
         
          <div class="col-lg-3 col-md-6 mb-4">

            
            <div class="card">

              
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body text-center">
               
                <a href="" class="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Grey blouse
                      <span class="badge badge-pill primary-color">bestseller</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>99$</strong>
                </h4>

              </div>
        

            </div>
         

          </div>
          
          <div class="col-lg-3 col-md-6 mb-4">

           
            <div class="card">

           
              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="card-img-top" alt="" />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body text-center">
       
                <a href="" class="grey-text">
                  <h5>Outwear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Black jacket</a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>219$</strong>
                </h4>

              </div>
           

            </div>
         

          </div>
         

        </div>
      

      </section>
      
      <nav class="d-flex justify-content-center wow fadeIn">
        <ul class="pagination pg-blue">

         
          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>

          <li class="page-item active">
            <a class="page-link" href="#">1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
     

    </div>
  </main>
  

  
</div>   
=======
      <div data-draggable="true" className="" style={{ position: 'relative', draggable: 'false' }}>

        <section draggable="false" className="overflow-hidden pt-0" data-v-271253ee="">
          <section className="" style={{ paddingBottom: '1px'}}>

          <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-2">

            <div className="container-fluid">
              <div className="d-flex">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation"> <i className="fas fa-bars"></i> </button>
                <a className="navbar-brand ms-3" draggable="false"> <i
                  className="fas fa-gem text-primary" aria-controls="#picker-editor"></i> </a>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
                  <li className="nav-item"> <a className="nav-link" href="" aria-controls="#picker-editor"
                    draggable="false">Dashboard</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="" aria-controls="#picker-editor"
                    draggable="false">Team</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="" aria-controls="#picker-editor"
                    draggable="false">Projects</a> </li>
                </ul>
              </div>

              <div className="d-flex align-items-center"> <button type="button" className="btn   btn-link px-3 mb-1 me-2"
                aria-controls="#picker-editor">Login</button> <button type="button"
                  className="btn   btn-primary mb-1 me-lg-3" aria-controls="#picker-editor">Sign up</button> </div>

            </div>
          </nav>
        </section>
</section>
      </div>
      <div data-draggable="true" className="" style={{position: 'relative', draggable:'false'}}>


        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10">
            <div className="p-5 text-center bg-image"
              style={{backgroundImage: 'url(https://images.pexels.com/photos/57705/lake-evening-sunset-abendstimmung-57705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', height: '500px', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundColor: 'rgba(0, 0, 0, 0)',
              ariaControls:'#picker-editor'}}>
              <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <div className="text-white">
                        <h2 className="mb-4 px-4 px-md-5 display-3 fw-bold ls-tight"> <span>Are you ready</span> <br/> <span
                          className="">for the shoot?</span> </h2>
                        <p className="text-white lead mb-0 px-4 px-md-5">Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Minima officia consequatur adipisci tenetur repudiandae rerum quos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>
      <div data-draggable="true" className="" style={{position:'relative', draggable:'false'}}>


        <section draggable="false" className="overflow-hidden pt-0" data-v-271253ee="">
          <section className="mb-10">

            <div className="p-5 text-center bg-image"
              style={{backgroundImage: 'url(https://media.architecturaldigest.com/photos/5b7dc0c5f3a08c0bc142f98f/master/pass/GettyImages-617579982.jpg)',height:' 500px', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundColor: 'rgba(0, 0, 0, 0)',
              ariaControls:'i#pcker-editor'}}>
              <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10">
                      <div className="text-white pb-md-5">
                        <h1 className="my-md-5 mb-4 px-4 px-md-5 display-3 fw-bold ls-tight"> <span>The best offer on the
                          market</span> <br/> <span className="">for your business</span> </h1> <a
                            className="btn   btn-secondary btn-lg py-3 px-5 me-2" href="#!" role="button"
                            aria-controls="#picker-editor" draggable="false" >Get started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>
      <div data-draggable="true" className="" style={{position: 'relative'}}>


        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center">
            <h2 className="fw-bold mb-7 text-center">Projects we are proud of</h2>
            <div className="row gx-lg-5">
              <div className="col-lg-4 col-md-12 mb-6 mb-lg-0">
                <div className="card shadow-2-strong">
                  <div className="bg-image hover-overlay ripple shadow-4-strong rounded mx-3" data-mdb-ripple-color="light"
                    style={{marginTop: '-15px'}}> <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                      className="img-fluid" alt="" aria-controls="#picker-editor"/> </div>
                  <div className="card-body">
                    <h5 className="card-title">White city</h5>
                    <p className="card-text">Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate.
                      Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p> <a href="#!"
                        className="btn  btn-primary btn-rounded" aria-controls="#picker-editor">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-6 mb-lg-0">
                <div className="card shadow-2-strong">
                  <div className="bg-image hover-overlay ripple shadow-4-strong rounded mx-3" data-mdb-ripple-color="light"
                    style={{marginTop: '-15px'}}> <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                      className="img-fluid" alt="" aria-controls="#picker-editor"/> </div>
                  <div className="card-body">
                    <h5 className="card-title">A lonely bench</h5>
                    <p className="card-text">Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec
                      ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.</p> <a href="#!"
                        className="btn  btn-primary btn-rounded" aria-controls="#picker-editor">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-6 mb-lg-0">
                <div className="card shadow-2-strong">
                  <div className="bg-image hover-overlay ripple shadow-4-strong rounded mx-3" data-mdb-ripple-color="light"
                    style={{marginTop: '-15px'}}> <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                      className="img-fluid" alt="" aria-controls="#picker-editor"/> </div>
                  <div className="card-body">
                    <h5 className="card-title">Happy snow</h5>
                    <p className="card-text">Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non
                      vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.</p> <a href="#!"
                        className="btn  btn-primary btn-rounded" aria-controls="#picker-editor">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>
      <div data-draggable="true" className="" style={{position: 'relative'}}>


        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center">
           
            <div className="p-5 bg-image"
              style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundColor: 'rgba(0, 0, 0, 0)',
              ariaControls:'#picker-editor'}}></div>
            <div className="card mx-4 mx-md-5 shadow-5-strong"
              style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
              <div className="card-body py-5 px-md-5">
                <div className="row mb-5">
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative"> <i
                    className="fas fa-globe-americas fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">Unites States</h6>
                    <hr className="divider-vertical d-none d-lg-block"/>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative"> <i
                    className="fas fa-map-marker-alt fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">New York, 94126</h6>
                    <hr className="divider-vertical d-none d-lg-block"/>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative"> <i
                    className="fas fa-phone fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">+ 01 234 567 89</h6>
                    <hr className="divider-vertical d-none d-lg-block"/>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative"> <i
                    className="fas fa-hand-holding-usd fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">Tax ID: 273 384</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <form>

                      <div className="form-outline mb-4"> <input type="text" id="form4Example1" className="form-control"/> <label
                        className="form-label" for="form4Example1" style={{marginLeft: '0px'}}>Name</label>
                        <div className="form-notch">
                          <div className="form-notch-leading" style={{width: '9px'}}></div>
                          <div className="form-notch-middle" style={{width: '42.4px'}}></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <div className="form-outline mb-4"> <input type="email" id="form4Example2" className="form-control"/>
                        <label className="form-label" for="form4Example2" style={{marginLeft:'0px'}}> Email address </label>
                        <div className="form-notch">
                          <div className="form-notch-leading" style={{width:' 9px'}}></div>
                          <div className="form-notch-middle" style={{width: '88.8px'}}></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <div className="form-outline mb-4"> <textarea className="form-control" id="form4Example3"
                        rows="4"></textarea> <label className="form-label" for="form4Example3"
                          style={{marginLeft: '0px'}}>Message</label>
                        <div className="form-notch">
                          <div className="form-notch-leading" style={{width: '9px'}}></div>
                          <div className="form-notch-middle" style={{width: '60px}'}}></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4"> <input className="form-check-input me-2"
                        type="checkbox" value="" id="form4Example4" checked=""/> <label className="form-check-label"
                          for="form4Example4">Send me a copy of this message</label> </div>
                      <button type="submit" className="btn  btn-primary btn-block"
                        aria-controls="#picker-editor">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>
    </div>
>>>>>>> d93b0ce47c88a64e7969ca6304888603d18cf1c3
  )
};

export default Home;