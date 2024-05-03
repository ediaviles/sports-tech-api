import axios from 'axios'
import { leagueId, getTeamId, seasonId } from './mapping.mjs'

const API_BASE_URL = 'https://v3.football.api-sports.io'
const HEADERS = {
    'x-rapid-api-key': '35c46d944bcbe743dff3522c17dbf14b',
    'x-rapid-api-host': 'v3.football.api-sports.io',
    'x-apisports-key': '35c46d944bcbe743dff3522c17dbf14b'
}

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: HEADERS
})

// TODO Get All live Prem Games

// Get All Games by Date
export const getAllGamesByDate = async ({from, to, league = leagueId, season = seasonId}) => {
    try {
        const response = await apiClient.get(`/fixtures?league=${league}&season=${season}&from=${from}&to=${to}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// TODO Get Premier League Schedule

// TODO Get Live Game by matchup

// Get Game stats by fixtureId
export const getGameStats = async ({fixture}) => {
    try {
        const response = await apiClient.get(`/fixtures/statistics?fixture=${fixture}`)
        console.log(response.data)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get Game events by fixtureId
export const getGameEvents = async ({fixture}) => {
    try {
        const response = await apiClient.get(`/fixtures/events?fixture=${fixture}`)
        console.log(response.data)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get all players by league and season
export const getAllPlayers = async ({league = leagueId, season = seasonId, page = 1}) => {
    try {
        const response = await apiClient.get(`/players?league=${league}&season=${season}&page=${page}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get all teams by league and season
export const getAllTeams = async ({league = leagueId, season = seasonId, page = 1}) => {
    try {
        const response = await apiClient.get(`/teams?league=${league}&season=${season}&page=${page}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get team stats by league, season, and team name
export const getTeamStats = async ({league = leagueId, season = seasonId, team}) => {
    try {
        const response = await apiClient.get(`/teams/statistics?league=${league}&season=${season}&team=${getTeamId(team)}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get Team Lineups by fixtureId
export const getTeamLineups = async ({fixtureId}) => {
    try {
        const response = await apiClient.get(`/fixtures/lineups?fixture=${fixtureId}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get Team Lineups by fixtureId
export const getPlayerStats = async ({fixtureId}) => {
    try {
        const response = await apiClient.get(`/fixtures/players?fixture=${fixtureId}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}