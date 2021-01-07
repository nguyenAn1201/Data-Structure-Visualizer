import { Box, Card, CardContent, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, Theme, useTheme } from '@material-ui/core/styles';

interface LinkedListNodeProps {
    value: number,
}

export const LinkedListNodeComponent: React.FC<LinkedListNodeProps> = ({value}) => {
    const classes = useStyles();

    return (
        <Box m={2}>
            <Card square className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="button">Data: {value}</Typography>
                </CardContent>
                <Divider/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="button">Next Node</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: "160px",
            backgroundColor: theme.palette.primary.light,
        },
        cardContent: {
            dispaly: "flex",
            textAlign: "center",

        }
    })
)
