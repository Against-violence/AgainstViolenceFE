<template>
    <div class="expose-container">
        <el-table ref="filterTable" :data="exposeList" style="width: 100%">
            <el-table-column prop="status" label="状态" width="100" :filters="[{ text: '已认证', value: 'authed' }, { text: '未认证', value: 'notAuthed' }]" :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status === 'authed' ? 'success' : 'warning'" disable-transitions>{{scope.row.status === 'authed' ? '已认证' : '未认证' }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="揭发时间" sortable width="150" column-key="date">
            </el-table-column>
            <el-table-column prop="title" label="标题" width="200">
            </el-table-column>
            <el-table-column prop="content" label="简介" width="500">
            </el-table-column>
            <el-table-column prop="thumbUp" label="赞数" width="50">
            </el-table-column>
            <el-table-column prop="thumbDown" label="踩数" width="50">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleThumbUp(scope.$index, scope.row)" icon="el-icon-caret-top">赞</el-button>
                    <el-button size="mini" @click="handleThumbDown(scope.$index, scope.row)" icon="el-icon-caret-bottom">踩</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "Expose",
    data() {
        return {
            exposeList: [
                {
                    id: 1,
                    title: "我天天被欺负",
                    content: "我天天被欺负，真的好无奈，我该怎么办呢？",
                    region: "北京市",
                    date: "2019/10/26",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                },
                {
                    id: 2,
                    title: "被揍了",
                    content: "谁能替我报仇",
                    region: "上海市",
                    date: "2019/10/27",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                },
                {
                    id: 3,
                    title: "找大佬",
                    content: "我天天被欺负，找大佬罩我",
                    region: "南京市",
                    date: "2019/10/21",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "inAuth"
                },
                {
                    id: 4,
                    title: "老师也欺负我",
                    content: "这是我没想到的，大人也不全是好人",
                    region: "西安市",
                    date: "2019/10/28",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "inAuth"
                },
                {
                    id: 5,
                    title: "到底该说不该说",
                    content: "被班长欺负，人面兽心",
                    region: "成都市",
                    date: "2019/10/30",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                },
                {
                    id: 6,
                    title: "不敢说",
                    content: "这里会是一个好的树洞吗",
                    region: "成都市",
                    date: "2019/10/29",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "inAuth"
                },
                {
                    id: 7,
                    title: "被欺负了一个学期",
                    content: "没办法了只能求救",
                    region: "成都市",
                    date: "2019/11/01",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                },
                {
                    id: 8,
                    title: "被欺负了一个学期",
                    content: "没办法了只能求救",
                    region: "成都市",
                    date: "2019/11/01",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                },
                {
                    id: 9,
                    title: "被欺负了一个学期",
                    content: "没办法了只能求救",
                    region: "成都市",
                    date: "2019/11/01",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                },
                {
                    id: 10,
                    title: "被欺负了一个学期",
                    content: "没办法了只能求救",
                    region: "成都市",
                    date: "2019/11/01",
                    thumbUp: Math.random()
                        .toString()
                        .slice(-2),
                    thumbDown: Math.random()
                        .toString()
                        .slice(-1),
                    status: "authed"
                }
            ]
        };
    },
    methods: {
        statusFormater(status) {
            return status === "authed" ? "已认证" : "未认证";
        },
        filterTag(value, row) {
            return row.status === value;
        },
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
        handleThumbUp(index, row) {
            console.log('handleThumbUp', index, row);
        },
        handleThumbDown(index, row) {
            console.log('handleThumbUp', index, row);
        }
    }
};
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.expose-container {
    display: flex;
    flex-direction: column;
    width: 65%;
    margin: 0 auto;
    padding: 15px;
    justify-content: space-between;
}
</style>