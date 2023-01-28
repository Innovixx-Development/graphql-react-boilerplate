import React from 'react';
import { welcomeStyles } from './styles';
import { useTestQuery } from '../../graphql/generated/schema';

export const Welcome: React.FC = () => {
  const styles = welcomeStyles();

  const { data, loading, error } = useTestQuery();

  if (loading) {
    return <div className={styles.container}><p>Loading...</p></div>;
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p>
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{data.test.text}</h1>
    </div>
  );
};
