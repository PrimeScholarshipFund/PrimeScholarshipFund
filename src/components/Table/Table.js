import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


let counter = 0;
function createData(status, first_name, last_name, email, phone, comment) {
  counter += 1;
  return { id: counter, status, first_name, last_name, email, phone, comment };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'status', label: 'Status' },
  { id: 'first_name', label: 'First Name' },
  {id: 'last_name', label: 'Last Name'},
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone Number' },
  { id: 'comment', label: 'Comments' },
];

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
   
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class EnhancedTableHead extends React.Component {

  componentDidMount() {
    console.log(this.props);
    
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      //  onSelectAllClick,
       order,
       orderBy,
      //  numSelected,
      //  rowCount,
      } = this.props;

      const { classes } = this.props

    return (
      <TableHead>

        <TableRow>
          {columnData.map(column => {
            return (
              <CustomTableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  className={classes.head}
                  title="Sort"
                  enterDelay={200}
                >
                  <TableSortLabel
                    className = {classes.head}
                    onClick={this.createSortHandler(column.id)}

                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </CustomTableCell>
            );
          }, this)}
        </TableRow>

      </TableHead>
    );
  }
}

TableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  viewButton: {
    color: theme.palette.secondary.light,
  }
});


class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.apps,
      order: 'asc',
      orderBy: 'status',
      selected: [],

      page: 0,
      rowsPerPage: 5,
    };
  }

  resetButton = () => {
    return (
      <Button color="primary" onClick={this.props.reset}>Reset</Button>
    )
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              classes = {classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                    >
                      <TableCell>{n.status}</TableCell>
                      <TableCell>{n.first_name}</TableCell>
                      <TableCell>{n.last_name}</TableCell>
                      <TableCell>{n.email}</TableCell>
                      <TableCell>{n.phone_number}</TableCell>
                      <TableCell><Button onClick={() => this.props.setActive(n)} className={classes.viewButton} >View</Button></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          ActionsComponent={this.resetButton}
          component="div"
          count={this.props.apps.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);












////
