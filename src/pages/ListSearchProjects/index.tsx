import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import moment from 'moment';
import AvatarList from './components/AvatarList';
import type { StateType } from './model';
import type { ListItemDataType } from './data.d';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';

const { Option } = Select;
const FormItem = Form.Item;
const { Paragraph } = Typography;

type ListSearchProjectsProps = {
  dispatch: Dispatch;
  listSearchProjects: StateType;
  loading: boolean;
};

const getKey = (id: string, index: number) => `${id}-${index}`;

const ListSearchProjects: FC<ListSearchProjectsProps> = ({
  dispatch,
  listSearchProjects: { list = [] },
  loading,
}) => {
  useEffect(() => {
    dispatch({
      type: 'listSearchProjects/fetch',
      payload: {
        count: 8,
      },
    });
  }, []);
  const cardList = list && (
    <List<ListItemDataType>
      rowKey="id"
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
            <Card.Meta
              title={<a>{item.title}</a>}
              description={
                <Paragraph className={styles.item} ellipsis={{ rows: 2 }}>
                  {item.subDescription}
                </Paragraph>
              }
            />
            <div className={styles.cardItemContent}>
              <span>{moment(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                  {item.members.map((member, i) => (
                    <AvatarList.Item
                      key={getKey(item.id, i)}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <div className={styles.coverCardList}>
      <Card bordered={false}>
        <Form
          layout="inline"
          onValuesChange={() => {
            // ??????????????????????????????
            // ????????????????????????
            dispatch({
              type: 'listSearchProjects/fetch',
              payload: {
                count: 8,
              },
            });
          }}
        >
          <StandardFormRow title="????????????" block style={{ paddingBottom: 11 }}>
            <FormItem name="category">
              <TagSelect expandable>
                <TagSelect.Option value="cat1">?????????</TagSelect.Option>
                <TagSelect.Option value="cat2">?????????</TagSelect.Option>
                <TagSelect.Option value="cat3">?????????</TagSelect.Option>
                <TagSelect.Option value="cat4">?????????</TagSelect.Option>
                <TagSelect.Option value="cat5">?????????</TagSelect.Option>
                <TagSelect.Option value="cat6">?????????</TagSelect.Option>
                <TagSelect.Option value="cat7">?????????</TagSelect.Option>
                <TagSelect.Option value="cat8">?????????</TagSelect.Option>
                <TagSelect.Option value="cat9">?????????</TagSelect.Option>
                <TagSelect.Option value="cat10">?????????</TagSelect.Option>
                <TagSelect.Option value="cat11">????????????</TagSelect.Option>
                <TagSelect.Option value="cat12">????????????</TagSelect.Option>
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="????????????" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="??????" name="author">
                  <Select placeholder="??????" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">?????????</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="?????????" name="rate">
                  <Select placeholder="??????" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">??????</Option>
                    <Option value="normal">??????</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
    </div>
  );
};

export default connect(
  ({
    listSearchProjects,
    loading,
  }: {
    listSearchProjects: StateType;
    loading: { models: Record<string, boolean> };
  }) => ({
    listSearchProjects,
    loading: loading.models.listSearchProjects,
  }),
)(ListSearchProjects);
