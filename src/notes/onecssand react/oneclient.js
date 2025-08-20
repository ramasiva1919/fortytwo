import {useEffect, useState} from "react";
import EvanDatatable from "../common/datatable/EvanDatatable.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteClient, fetchClients} from "../../features/ClientSlice.js";
import {Grid2, Typography} from "@mui/material";
import EvanButton from "../common/buttons/EvanButton.jsx";
import {Delete, Edit} from "@mui/icons-material";
import {MRT_ActionMenuItem} from "material-react-table";
import EvanConfirm from "../common/EvanConfirm.jsx";
import {Link} from "react-router";
import {showToaster} from "../../features/toasterSlice.js";
import EvanLink from "../common/link/EvanLink.jsx";
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';



const ClientList = () => {
    const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 10});
    const [sort, setSort] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const [globalFilter, setGlobalFilter] = useState("");

    const dispatch = useDispatch();
    const {clients} = useSelector((state) => state.clients);

     useEffect(() => {
        const params = {
            page: pagination.pageIndex + 1,
            perPage: pagination.pageSize,
            sortField: sort[0]?.id || "id",
            sortOrder: sort[0]?.asc ? "asc" : "desc",
            search: globalFilter || "",
        };
        dispatch(fetchClients(params));
    }, [dispatch, pagination, sort, globalFilter]);

    useEffect(() => {
        setRowCount(clients?.meta?.total || 0);
    }, [clients.meta]);


     const handleDelete = async (id) => {
        try {
            await dispatch(deleteClient(id)).unwrap();
            dispatch(
                showToaster({
                    message: "Client Deleted successfully!",
                    severity: "success",
                })
            );
        } catch (error) {
            dispatch(
                showToaster({
                    message:
                        error?.message || "An error occurred while saving the client.",
                    severity: "error",
                })
            );
        }
    };

     return (
        <Grid2 container spacing={2}>
            <Grid2 size={12}>
                <Grid2 container spacing={2}>
                    <Grid2 size={6}><Typography variant="h1" component="h1">Clients</Typography></Grid2>
                    <Grid2 size={6} textAlign="right"> <EvanButton to={"/client-create"} component={Link}>
                        Add Client
                    </EvanButton></Grid2>
                </Grid2>
            </Grid2>
            <Grid2 size={12}>
                <EvanDatatable
                    data={clients?.data || []}
                    columns={columns}
                    state={{
                        pagination,
                        sorting: sort,
                    }}
                    manualPagination
                    manualSorting
                    onGlobalFilterChange={setGlobalFilter}
                    manualFiltering={true}
                    enableSorting
                    rowCount={rowCount}
                    onPaginationChange={setPagination}
                    onSortingChange={setSort}
                    enableRowActions={true}
                    positionActionsColumn="last"
                    renderRowActionMenuItems={({closeMenu, row, table}) => [
                        <MRT_ActionMenuItem
                            icon={<Edit/>}
                            key="edit"
                            label="Edit"
                            onClick={() => {
                                closeMenu();
                            }}
                            table={table}
                            component={Link}
                            to={`/client-create?id=${row.original.id}`}
                        />,
                        <MRT_ActionMenuItem
                            icon={<CropLandscapeIcon/>}
                            key="poc"
                            label="Plan of Care"
                            onClick={() => {
                                closeMenu();
                            }}
                            table={table}
                            component={Link}
                            to={`/client-poc?clientId=${row.original.id}`}
                        />,
                        <MRT_ActionMenuItem
                            icon={
                                <EvanConfirm
                                    confirmSuccess={async () => {
                                        await handleDelete(row.original.id);
                                        closeMenu();
                                    }}
                                    confirmFail={() => closeMenu()}
                                    description="Are you sure you want to delete this item? This action cannot be undone."
                                >
                                    <Grid2
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Delete style={{marginRight: 8}}/>
                                        <Typography>Delete</Typography>
                                    </Grid2>
                                </EvanConfirm>
                            }
                            key="delete"
                            label=""
                            onClick={() => {
                            }}
                            table={table}
                        />,
                    ]}
                />
            </Grid2>
        </Grid2>

    )
};

export default ClientList;