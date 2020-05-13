import React from 'react'

function TransactionWidget() {
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
                      <div className="font-weight-normal txt-value-amount">0</div>
                      <div className="font-weight-bold txt-value-name">ACT</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center text-secondary">
                      <div className="font-weight-normal txt-value-amount">0</div>
                      <div className="font-weight-bold txt-value-name">HUG</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center text-secondary">
                      <div className="font-weight-normal txt-value-amount">0</div>
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
