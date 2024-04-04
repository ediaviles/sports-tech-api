const teamNameToTeamId = {
    "Arsenal": 42,
    "Aston Villa": 66,
    "Bournemouth": 35,
    "Brentford": 55,
    "Brighton": 51,
    "Burnley": 44,
    "Chelsea": 49,
    "Crystal Palace": 52,
    "Everton": 45,
    "Fullham": 36,
    "Liverpool": 40,
    "Luton": 1359,
    "Manchester City": 50,
    "Manchester United": 33,
    "Newcastle": 34,
    "Nottingham Forest": 65,
    "Sheffield United": 62,
    "Tottenham": 47,
    "West Ham": 48,
    "Wolves": 39
}

export const leagueId = 39
export const seasonId = 2023

export const getTeamId = (teamName) => {
    return teamNameToTeamId[teamName]
}