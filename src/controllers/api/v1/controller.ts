

import Kitsu from 'kitsu';

const kitsu = new Kitsu();

interface Request {
  query: {
    limit?: number;
  };
}

interface Response {
  render: (view: string, locals: { title: string }) => void;
  send: (data: any) => void;
}

export const index = (req: Request, res: Response) => {
  res.render('api_index', { title: 'Tanuki API Docs' });
};

export const anime = (req: Request, res: Response) => {
  let pageLimit: number = (req.query.limit ? req.query.limit : 20);
  pageLimit = pageLimit > 20 ? 20 : pageLimit;

  const params = {
    params: {
      fields: {
        anime: 'id,titles,status,subtype',
      },
      filter: {
        status: ['current'],
        subtype: 'TV',
      },
      sort: 'popularityRank',
      page: {
        limit: pageLimit,
      },
    },
  };

  kitsu.get('anime', params).then(
    (response) => res.send(response.data),
    (error) => res.send(error)
  );
};

export const upcoming = (req: Request, res: Response) => {
  let pageLimit: number = (req.query.limit ? req.query.limit : 20);
  pageLimit = pageLimit > 20 ? 20 : pageLimit;

  const params = {
    params: {
      fields: {
        anime: 'id,titles,status,subtype',
      },
      filter: {
        status: 'upcoming',
      },
      sort: 'popularityRank',
      page: {
        limit: pageLimit,
      },
    },
  };

  kitsu.get('anime', params).then(
    (response: any) => res.send(response.data),
    (error: any) => res.send(error)
  );
};