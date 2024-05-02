import { getPlayerStats, getAllPlayers, getAllTeams, getTeamStats, getAllGamesByDate, getGameStats, getGameEvents, getTeamLineups } from "./services/api.mjs";
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
        res.status(200).json(playerStats)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('/get-all-players/:page', async (_, res) => {
    try {
        const players = await getAllPlayers({page: req.params.page})
        console.log(players)
        res.status(200).json(players)
    } catch (error) {
        throw error
    }
})

app.get('/get-all-teams/:page', async (_, res) => {
    try {
        const teams = await getAllTeams({page: req.params.page})
        console.log(teams)
        res.status(200).json(teams)
    } catch (error) {
        throw error
    }
})

app.get('/get-team-stats/:team', async (req, res) => {
    try {
        const teamStats = await getTeamStats({team: req.params.team})
        console.log(teamStats)
        res.status(200).json(teamStats)
    } catch (error) {
        throw error
    }
})

// date should be in the following format: YYYY-MM-DD
// can take up to two parameters: from, to - if to is not provided, will return games for the only date specified
app.get('/get-games', async (req, res) => {
    try {
        let { from, to } = req.query
        if (to === undefined) to = from
        const games = await getAllGamesByDate({from: from, to: to})
        console.log(games)
        res.status(200).json(games)
    } catch (error) {
        throw error
    }
})

app.get('/get-team-lineups', async (req, res) => {
    try {
        let { id } = req.query
        if (id === undefined) throw new Error('Fixture ID is required')
        
        const lineups = await getTeamLineups({fixtureId: id})
        console.log(lineups)
        res.status(200).json(lineups)
    } catch (error) {
        throw error
    }
})

app.get('/get-game-stats/:fixtureId', async (req, res) => {
    try {
        const gameStats = await getGameStats({fixture: req.params.fixtureId})
        console.log(gameStats)
        res.status(200).json(gameStats)
    } catch (error) {
        throw error
    }
})

app.get('/get-game-events/:fixtureId', async (req, res) => {
    try {
        const gameEvents = await getGameEvents({fixture: req.params.fixtureId})
        console.log(gameEvents)
        res.status(200).json(gameEvents)
    } catch (error) {
        throw error
    }
})