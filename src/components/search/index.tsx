import React from 'react';
import classnames from 'classnames';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useStyles } from './styles';
import { useSearch } from './hooks';

const Search: React.FC<{
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
}> = ({
  className,
  placeholder,
  callback,
}) => {
  const classes = useStyles();

  const {
    handleOnSubmit,
    handleOnChange,
    handleKeyDown,
    value,
  } = useSearch(callback);
  return (
    <form
      className={classnames(className, classes.root)}
      onSubmit={handleOnSubmit}
    >
      <InputBase
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={value}
        inputProps={{
          'aria-label': placeholder,
        }}
        endAdornment={(
          <SearchIcon fontSize="small" className="Search-icon" />
        )}
      />
    </form>
  );
};

export default Search;
