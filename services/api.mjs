import axios from 'axios'
import { leagueId, getTeamId } from './mapping.mjs'

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

// TODO Get Premier League Schedule

// TODO Get Live Game by matchup

// TODO Get Game stats by matchup

// TODO Get player stats
export const getPlayerStats = async ({id = false, team = "", league = leagueId, season = 2023, search = "", page = 1} = {}) => {
    try {
        let query
        console.log(id)
        if (id !== false) {
            query = `id=${id}&season=${season}&page=${page}`
        } else {
            query = `team=${getTeamId(team)}&league=${league}&season=${season}&search=${search}&page=${page}`
        }
        console.log(query)
        const response = await apiClient.get(`/players?${query}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get all players by league and season
export const getAllPlayers = async ({league = leagueId, season = 2023, page = 1}) => {
    try {
        const response = await apiClient.get(`/players?league=${league}&season=${season}&page=${page}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get all teams by league and season
export const getAllTeams = async ({league = leagueId, season = 2023, page = 1}) => {
    try {
        const response = await apiClient.get(`/teams?league=${league}&season=${season}&page=${page}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// Get team stats by league, season, and team name
export const getTeamStats = async ({league = leagueId, season = 2023, team}) => {
    try {
        const response = await apiClient.get(`/teams/statistics?league=${league}&season=${season}&team=${getTeamId(team)}`)
        console.log(response.data.response)
        return response.data.response
    } catch (error) {
        throw error
    }
}

// getPlayerStats({team: "Manchester City", search: "Walker"})