import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const CustomDataGridContainer = styled(Box)`
  height: 400px;
  width: 80%;
  margin: auto;

  .MuiDataGrid-root {
    border: none;
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  .MuiDataGrid-cell {
    border: none;
    padding: 8px;
  }

  .MuiDataGrid-columnHeader,
  .MuiDataGrid-cell {
    font-weight: bold;
  }

  .MuiDataGrid-row:nth-of-type(odd) {
    background-color: #f0f0f0;
  }

  .MuiDataGrid-row:hover {
    background-color: #ebebeb;
  }
`;

const Table = ({ tableData }) => {
  console.log(tableData);
  const columns = [
    { field: "id", headerName: "S.no", width: 90 },
    {
      field: "matchFormat",
      headerName: "Match Format",
      width: 150,
    },
    {
      field: "innings",
      headerName: "Innings",
      width: 110,
    },
    {
      field: "teams",
      headerName: "Teams",
      width: 150,
    },
    {
      field: "batting",
      headerName: "Batting",
      width: 110,
    },
    {
      field: "bowling",
      headerName: "Bowling",
      width: 110,
    },
    {
      field: "runs",
      headerName: "Runs",
      width: 110,
    },
    {
      field: "oversLeft",
      headerName: "Over Left",
      width: 110,
    },
    {
      field: "wicketsLeft",
      headerName: "Wicket Left",
      width: 110,
    },
  ];

  const rows = tableData.map((row, index) => {
    console.log(row);

    return {
      id: index + 1,
      matchFormat: row.matchFormat,
      innings: row.innings,
      teams: `${row.teams[0]} vs ${row.teams[1]}`,
      batting: row.score.batting,
      bowling: row.score.bowling,
      runs: row.score.runs,
      oversLeft: row.score.oversLeft,
      wicketsLeft: row.score.wicketsLeft,
    };
  });
  return (
    <CustomDataGridContainer
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#f5f5f5",
        },
        "& .MuiDataGrid-cell": {
          border: "none",
          padding: "8px",
        },
        "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
          fontWeight: "bold",
        },
        "& .MuiDataGrid-row:nth-of-type(odd)": {
          backgroundColor: "#f0f0f0",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#ebebeb",
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </CustomDataGridContainer>
  );
};

export default Table;
