import { getPlayerStats, getAllPlayers, getAllTeams, getTeamStats } from "./services/api.mjs";
import cors from 'cors'
import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json())
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/get-player-stats/:team/:player', async (req, res) => {
    try {
        const playerStats = await getPlayerStats({team: req.params.team, search: req.params.player})
        console.log(playerStats)
        res.json(playerStats)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('/get-all-players/:page', async (_, res) => {
    try {
        const players = await getAllPlayers({page: req.params.page})
        console.log(players)
        res.json(players)
    } catch (error) {
        throw error
    }
})

app.get('/get-all-teams/:page', async (_, res) => {
    try {
        const teams = await getAllTeams({page: req.params.page})
        console.log(teams)
        res.json(teams)
    } catch (error) {
        throw error
    }
})

app.get('/get-team-stats/:team', async (req, res) => {
    try {
        const teamStats = await getTeamStats({team: req.params.team})
        console.log(teamStats)
        res.json(teamStats)
    } catch (error) {
        throw error
    }
})