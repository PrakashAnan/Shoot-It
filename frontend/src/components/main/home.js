import { Button, Card, CardContent, Paper, TextField } from '@mui/material';
import React from 'react';
import "./home.css"

const Home = () => {
  return (
    <div >
      <div data-draggable="true" className="container-fluid" style={{ position: 'relative', draggable: 'false' }}>
      </div>


      <div data-draggable="true" className="container-fluid pt-2" style={{ position: 'relative', draggable: 'false' }}>
        <section draggable="false" className="overflow-hidden pt-0" data-v-271253ee="">
          <section className="mb-10">
            <div className="text-center bg-image"
              style={{
                backgroundImage: 'url(https://media.architecturaldigest.com/photos/5b7dc0c5f3a08c0bc142f98f/master/pass/GettyImages-617579982.jpg)', height: ' 500px', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundColor: 'rgba(0, 0, 0, 0)',
                ariaControls: 'i#pcker-editor'
              }}>
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10">
                      <div className="text-white pb-md-5">
                        <h1 className="my-md-5 mb-4 px-4 px-md-5 display-3 fw-bold ls-tight"> <span>The best offer on the
                          market</span> <br /> <span className="">for your business</span> </h1> <a
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


      <div id="preview" class="preview">
        <div style={{display: 'none'}}></div>
        <div>
          <div data-draggable="true" class="" style={{position: 'relative'}} draggable="false">


            <section draggable="false" class="container" data-v-271253ee="">
              <section class="mb-10">
                <h2 class="fw-bold mb-5 text-center">Latest articles</h2>
                <div class="row gx-lg-5 mb-5 align-items-center">
                  <div class="col-md-6 mb-4 mb-md-0">
                     <img src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
                    class="w-100 shadow-4-strong rounded-4 mb-4" alt="" aria-controls="#picker-editor" draggable="false"/>
                  </div>
                  <div class="col-md-6 mb-4 mb-md-0">
                    <h3 class="fw-bold">Art</h3>
                    <div class="mb-2 text-danger small"> <i class="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"></i><span>Business</span> </div>
                    <p class="text-muted">Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
                      vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>
                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                      aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque
                      dolore placeat rem dignissimos?</p> <a class="btn  btn-secondary" href="#" role="button"
                        aria-controls="#picker-editor" draggable="false">Read more</a>
                  </div>
                </div>
                <div class="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
                  <div class="col-md-6 mb-4 mb-md-0">
                     <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                    class="w-100 shadow-4-strong rounded-4 mb-4" alt="" aria-controls="#picker-editor" draggable="false"/>
                  </div>
                  <div class="col-md-6 mb-4 mb-md-0">
                    <h3 class="fw-bold">Exhibition in Paris</h3>
                    <div class="mb-2 text-primary small"> <i class="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"></i><span>Art</span> </div>
                    <p class="text-muted">Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
                      rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                      eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                      vel justo. Duis faucibus sapien eget tortor finibus, a eleifend lectus dictum. Cras tempor convallis
                      magna id rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                      tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis
                      ex pharetra luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.</p> <a
                        class="btn  btn-secondary" href="#" role="button" aria-controls="#picker-editor" draggable="false"
                        >Read more</a>
                  </div>
                </div>
                <div class="row gx-lg-5 mb-5 align-items-center">
                  <div class="col-md-6 mb-4 mb-md-0">
                     <img src="https://mdbootstrap.com/img/new/standard/city/079.jpg"
                    class="w-100 shadow-4-strong rounded-4 mb-4" alt="" aria-controls="#picker-editor" draggable="false"/>
                  </div>
                  <div class="col-md-6 mb-4 mb-md-0">
                    <h3 class="fw-bold">Stock market boom</h3>
                    <div class="mb-2 text-warning small"> <i class="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"></i><span>Business</span> </div>
                    <p class="text-muted">Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate
                      libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus, tincidunt
                      feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et lobortis risus. Nullam in commodo
                      sapien. Curabitur ut erat congue sem finibus eleifend egestas eu metus. Sed ut dolor id magna rutrum
                      ultrices ut eget libero. Duis vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec
                      luctus, mi euismod dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus.
                      Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at euismod nec, blandit
                      ultrices erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae justo. Nulla condimentum
                      hendrerit leo, in feugiat ipsum condimentum ac. Maecenas sed blandit dolor.</p> <a
                        class="btn  btn-secondary" href="#" role="button" aria-controls="#picker-editor" draggable="false"
                        >Read more</a>
                  </div>
                </div>
              </section>
            </section>

          </div>
        </div>
      </div>




      <script type="text/javascript" src="js/mdb.min.js"></script>

      <script type="text/javascript"></script>











      <div data-draggable="true" className="" style={{ position: 'relative' }}>
        <section draggable="false" className="container-fluid " data-v-271253ee="">
          <section className="mb-10 text-center">
            <h2 className="fw-bold mb-7 text-center">Projects we are proud of</h2>
            <div className="row gx-lg-5">
              <div className="col-lg-4 col-md-12 mb-6 mb-lg-0">
                <div className="card shadow-2-strong">
                  <div className="bg-image hover-overlay ripple shadow-4-strong rounded mx-3" data-mdb-ripple-color="light"
                    style={{ marginTop: '-15px' }}> <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                      className="img-fluid" alt="" aria-controls="#picker-editor" /> </div>
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
                    style={{ marginTop: '-15px' }}> <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                      className="img-fluid" alt="" aria-controls="#picker-editor" /> </div>
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
                    style={{ marginTop: '-15px' }}> <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                      className="img-fluid" alt="" aria-controls="#picker-editor" /> </div>
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
      <div data-draggable="true" className="" style={{ position: 'relative' }}>


        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center">

            <div className="p-5 bg-image"
              style={{
                backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundColor: 'rgba(0, 0, 0, 0)',
                ariaControls: '#picker-editor'
              }}></div>
            <div className="card mx-4 mx-md-5 shadow-5-strong"
              style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
              <div className="card-body py-5 px-md-5">
                <div className="row mb-5">
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative"> <i
                    className="fas fa-globe-americas fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">Unites States</h6>
                    <hr className="divider-vertical d-none d-lg-block" />
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative"> <i
                    className="fas fa-map-marker-alt fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">New York, 94126</h6>
                    <hr className="divider-vertical d-none d-lg-block" />
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative"> <i
                    className="fas fa-phone fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">+ 01 234 567 89</h6>
                    <hr className="divider-vertical d-none d-lg-block" />
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative"> <i
                    className="fas fa-hand-holding-usd fa-3x text-primary mb-4" aria-controls="#picker-editor"></i>
                    <h6 className="fw-normal mb-0">Tax ID: 273 384</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <form>

                      <div className="form-outline mb-4"> <input type="text" id="form4Example1" className="form-control" /> <label
                        className="form-label" for="form4Example1" style={{ marginLeft: '0px' }}>Name</label>
                        <div className="form-notch">
                          <div className="form-notch-leading" style={{ width: '9px' }}></div>
                          <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <div className="form-outline mb-4"> <input type="email" id="form4Example2" className="form-control" />
                        <label className="form-label" for="form4Example2" style={{ marginLeft: '0px' }}> Email address </label>
                        <div className="form-notch">
                          <div className="form-notch-leading" style={{ width: ' 9px' }}></div>
                          <div className="form-notch-middle" style={{ width: '88.8px' }}></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <div className="form-outline mb-4"> <textarea className="form-control" id="form4Example3"
                        rows="4"></textarea> <label className="form-label" for="form4Example3"
                          style={{ marginLeft: '0px' }}>Message</label>
                        <div className="form-notch">
                          <div className="form-notch-leading" style={{ width: '9px' }}></div>
                          <div className="form-notch-middle" style={{ width: '60px}' }}></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4"> <input className="form-check-input me-2"
                        type="checkbox" value="" id="form4Example4" checked="" /> <label className="form-check-label"
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
    </div >
  )
};

export default Home;