import React from 'react'

const accordionButton = {
  color: 'white',
  backgroundColor: "#992e93",
  outline: 'none !important'
}


function Events() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white text-uppercase"  > EVANGELICAl EVENTS </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className='my-3 mr-5' style={{ lineHeight: '2', textAlign: 'justify' }}>
              Dear Brothers in Christ, <br />We are the chosen group of boys with the Grace of the Lord, spreading the Word of GOD in the Catholic Church. Our spiritual focus is to <strong>Teach the Bible</strong> to the catholic community across India. Here we show our Evangelical Proceedings and various Biblical Workshop Events photos in different Catholic Churches for your kind reference. We are Bible Beggars to collect various Bibles and spread them to every human being in this world to provide awareness about the Greater light of the Bible for a successful Spiritual life with the help of the Holy Spirit and Mother Virgin Mary. <i>Glory to the MOTHER of Incarnate WORD. Amen.</i>
            </p>
            <hr />

            <p style={{ lineHeight: 2 }} className='text-center lh-3'>
              <strong>சங்கீதம்  1</strong>
              <br />
              1: துன்மார்க்கருடைய ஆலோசனையில் நடவாமலும், பாவிகளுடைய வழியில் நில்லாமலும், பரியாசக்காரர் உட்காரும் இடத்தில் உட்காராமலும்,
              <br />
              Blessed is the man Who walks not in the counsel of the ungodly, Nor stands in the path of sinners, Nor sits in the seat of the scornful;
              <br />
              2: <strong>கர்த்தருடைய வேதத்தில் பிரியமாயிருந்து, இரவும் பகலும் அவருடைய வேதத்தில் தியானமாயிருக்கிற மனுஷன் பாக்கியவான்.
                <br />
                But his delight is in the law of the LORD, And in His law he meditates day and night.</strong>
            </p>
          </div>

        </div>

        <div className="row">

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" style={{ border: "1px solid #992e93", borderRadius: '4px' }}>
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" style={accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">

                  Photo 

                </div>
              </div>
            </div>
            <div className="accordion-item mt-2" style={{ border: "1px solid #992e93", borderRadius: '4px' }}>
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" style={accordionButton}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  photo
                </div>
              </div>
            </div>
            <div className="accordion-item mt-2"  style={{ border: "1px solid #992e93", borderRadius: '4px' }}>
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" style={accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Photo </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events