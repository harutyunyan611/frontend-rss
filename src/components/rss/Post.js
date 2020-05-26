import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Post = ({data}) => {
    const {title, description, link, category} = data;
    const formatCategory = (category) => {
      if (category._) {
          return category._;
      }
      return category;
    };
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h5>{title}</h5>
                </CardTitle>
                <CardSubtitle className="mb-2 font-italic">{!!category.length && category.map(formatCategory).join(", ")}</CardSubtitle>
                <CardText>{description}</CardText>
                <Button onClick={() => window.open(link)}>Open Site</Button>
            </CardBody>
        </Card>
    )
};


export default Post;
