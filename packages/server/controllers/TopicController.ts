import type { Request, Response } from 'express';
import escape from 'escape-html';
import { Op } from 'sequelize';
import { Topic } from '../models/Topic';

export const getAllTopicList = async (req: Request, res: Response) => {
  try {
    const searchTitle = req.query.searchTitle;

    if (!searchTitle) {
      const topics = await Topic.findAll();
      res.status(200).json(topics);
      return;
    }

    const topics = await Topic.findAll({
      where: {
        title: {
          [Op.iLike]: `%${searchTitle}%`,
        },
      },
    });

    res.status(200).json(topics);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const getTopicById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404).send('Id not found');
      return;
    }

    const topics = await Topic.findOne({
      where: {
        id,
      },
    });

    res.status(200).json(topics);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const createTopic = async (req: Request, res: Response) => {
  try {
    let data = req.body as {
      title: string;
      description: string;
      userId: number;
    } as any;

    data = escape(data);

    if (!data) {
      res.status(404).send('Empty body');
      return;
    }

    const topic = await Topic.create(data);

    res.status(200).json(topic);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};
