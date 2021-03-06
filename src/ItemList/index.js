import React from 'react';

export const ItemList = ({type, posts, sub}) => (
  <div className="row">
    <section className={`item-collection item-collection--${type}`}>
      {posts.map(post =>
        <a key={post.id} className={`item item--${type}`} target="_blank" href={post.url}>
          <h4 className="text-primary">{post.title}</h4>
          {post.thumbnail && post.thumbnail !== "default" && post.thumbnail !== "self" && post.thumbnail !== "nsfw" ?
            <img className="col-sm-12 img-responsive" src={post.thumbnail} alt=""/>
          : <img className="col-sm-12 img-responsive" src="https://camo.githubusercontent.com/b13830f5a9baecd3d83ef5cae4d5107d25cdbfbe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3732313033382f313732383830352f35336532613364382d363262352d313165332d383964312d3934376632373062646430332e706e67" alt={post.title}/>}
        </a>
      )}
    </section>
  </div>
);
