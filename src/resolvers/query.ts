import { IResolvers } from 'graphql-tools';

// Los resolvers de las operaciones de consulta para devolver información.
const query: IResolvers = {
    Query: {
        async seasonsList(_: void, __: any, {dataSources}) {
            return await dataSources.seasons.getSeasons().then (
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, { year }, {dataSources}) {
            return await dataSources.races.getYear(year).then (
                (data: any) => data.MRData.RaceTable.Races
            );
        },
    }
};

export default query;