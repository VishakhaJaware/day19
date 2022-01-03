export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="container fluid">
      <Header></Header>

      <div className="row mt-1">

        {list.map(() => (
          <div className="col-sm-12  col-md-4  mb-1">
            <MyCard></MyCard>
          </div>))}
      </div>
    </div>

  );
}


function Header() {
  return (
    <div className="row bg-primary text-light p-3 sticky-top text-center">
      <div className="col h1">Rajendra Kirana</div>
    </div>
  );
}



function MyCard() {
  let cardTitle = "Card Title";

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">{cardTitle}</div>
        <div className="card-body">
          <img className="w-70 h-50" src="./images/dipakMasala.jpeg" alt="" />


          <div className="row">

            <div className="col p-1">
              <input className="form-control-lg btn-outline-primary w-100 " type="button" value="Buy Now" />
            </div>

            <div className="col p-1">
              <input className="form-control-lg btn-outline-primary w-100 " type="button" value="Add to cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
