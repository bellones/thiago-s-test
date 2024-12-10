import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { LoadingIndicator, SafeAreaView } from '../../components';
import { Employee } from '../../components/Employee';
import { ItemSeparator } from '../../components/ItemSeparator/indext';
import { useListPersons } from '../../hooks/persons';
import { IEmployee } from '../../types/employee';

export function EmployeesScreen() {
  const { data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage } =
    useListPersons();
  const [list, setList] = useState<IEmployee[]>([]);
  const THERESHOLD = 0;
  useEffect(() => {
    if (data) {
      setList(data.pages.flatMap(d => d.data));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  const renderItem = ({ item }: { item: IEmployee }) => (
    <Employee item={item} />
  );
  const renderFooter = () =>
    isLoading || isFetchingNextPage ? <LoadingIndicator /> : <></>;

  return (
    <SafeAreaView>
      <FlatList
        refreshing={isLoading}
        onRefresh={refetch}
        data={list ?? []}
        keyExtractor={item => item.email}
        renderItem={renderItem}
        onEndReachedThreshold={THERESHOLD}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={renderFooter()}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
}
