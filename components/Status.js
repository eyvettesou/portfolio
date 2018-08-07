import React from 'react';
import ReactDOM from 'react-dom';

class Status extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#73877B'
  }

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
          return(
            <tbody>
              <tr><td colSpan={3}><h2>{`QUARTER ${quarter}`}</h2></td></tr>
              {header()}
              {row(statsData, quarter)}
              <tr><td colSpan={3}>&nbsp;</td></tr>
            </tbody>
          )
        })
      )
    }

    const header = () => {
      return (
        <tr>
          <td className="status-row status-task"><h3>Task</h3></td>
          <td className="status-row status-references"><h3>References</h3></td>
          <td className="status-row status-status"><h3>Status</h3></td>
        </tr>
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
        <table>
          <tbody>
            {tasksByQuarter(statsData)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Status;
