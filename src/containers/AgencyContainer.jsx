import { connect } from 'react-redux';
import React, { Component } from 'react';
import CitizenCard from '../components/CitizenInfoCard';
import AgencyModal from '../components/AgencySettingsModal';
import AgencyAddCitizenModal from '../components/AgencyAddCitizenModal';

class AgencyContainer extends Component {
    fetchCitizens(e) {
        e.preventDefault();
        const filter = e.target.filter.value;

        const { dispatch } = this.props;
        if(filter) { //shitty form valfilteration
            console.log(filter)
            // dispatch(fetchCitizens(filter));
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="agency-name col col-sm-10">{ this.props.user || '' }</h1>
                    {/*<button type="button" className="btn btn-primary" id="modal-trigger" data-toggle="modal" data-target="#modal-target">
                        TODO OPEN SETTINGS
                    </button>*/}
                </div>

                <div className="row">
                    <h3 className="citizen-list col col-sm-10">List of Citizens</h3>
                    {/*<form onSubmit={this.fetchCitizens.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search Field" aria-describedby="search-addon" />
                            <button name="filter" className="input-group-addon" id="search-addon">TODO: SEARCH BUTTON ICON</button>
                            <button className="input-group-addon" id="modal-trigger-add-citizen" data-toggle="modal" data-target="#modal-target-add-citizen">Add Something</button>
                        </div>
                    </form>*/}
                </div>

                <div className="row citizen-list">
                    {
                        this.props.citizen.citizens.map((x, yhh) => {
                            return (
                                <CitizenCard
                                    key={yhh}
                                    firstName={x.firstName}
                                    middleName={x.middleName}
                                    lastName={x.lastName}
                                    info={x.fields}/>
                            )
                        })
                    }
                </div>

                <AgencyModal />
                <AgencyAddCitizenModal />
            </div>
        )
    }
};

export default connect(store => {
    return {
        citizen: store.citizens,
        user: store.user.user || ''
    };
})(AgencyContainer);
