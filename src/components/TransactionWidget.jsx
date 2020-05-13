import React from 'react'

function TransactionWidget({transactions}) {
  
  var actTotal = transactions.reduce(function(prev, cur) {
    return prev + cur.ACT;
  }, 0);
  // console.log(actTotal);
  var hugTotal = transactions.reduce(function(prev, cur) {
    return prev + cur.HUG;
  }, 0);
  // console.log(hugTotal);
  var prepaidTotal = transactions.reduce(function(prev, cur) {
    return prev + cur.Prepaid;
  }, 0);
  // console.log(prepaidTotal);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card shadow my-1">
          <div className="card-shadow">
            <div className="card-body p-1">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="text-center text-secondary">
                      <div className="font-weight-normal txt-value-amount">{actTotal}</div>
                      <div className="font-weight-bold txt-value-name">ACT</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center text-secondary">
                      <div className="font-weight-normal txt-value-amount">{hugTotal}</div>
                      <div className="font-weight-bold txt-value-name">HUG</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center text-secondary">
                      <div className="font-weight-normal txt-value-amount">{prepaidTotal}</div>
                      <div className="font-weight-bold txt-value-name">Prepaid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default TransactionWidget
