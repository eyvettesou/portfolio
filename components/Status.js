import React from 'react';
import ReactDOM from 'react-dom';
import './status.css';

class Status extends React.Component {
  render() {
    const { statsData } = this.props;

    const quarters = statsData
      .map( (stat) => {return stat.quarter} )
      .filter((element, position, self) => {
        return (self.indexOf(element) == position);
      })

    const tasksByQuarter = (statsData) => {
      return(
        quarters.map( (quarter) => {
          return <div className="status-container">
              <h2 className="status-quarter">{`• Quarter ${quarter} •`}</h2>
              <table>
                <thead>
                  <tr>
                    <th className="status-row status-task">
                      <h3>Task</h3>
                    </th>
                    <th className="status-row status-references">
                      <h3>References</h3>
                    </th>
                    <th className="status-row status-status">
                      <h3>Status</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>{row(statsData, quarter)}</tbody>
              </table>
            </div>;
        })
      )
    }

    const row = (statsData, quarter) => {
      return(
        statsData
          .filter( (stat) => {
            return(stat.quarter == quarter)
          })
          .map( (stat) => {
            const references = stat.references.map( (reference) => {
              return (
                <span>
                  <a href={reference} target="_blank">{reference}</a><br />
                </span>
              )
            })

            return (
              <tr>
                <td className="status-row status-task ">{stat.task}</td>
                <td className="status-row status-references">{references}</td>
                <td className="status-row status-status">{stat.status}</td>
              </tr>
            )
          })
      )
    }

    return (
      <div>
        {tasksByQuarter(statsData)}
      </div>
    )
  }
}

export default Status;
