<template>
  <section class="gao-authorization">
    <div class="art-title">
      授权书
    </div>
    <p class="art-content">
      为了维护您的利益，请您在进行授权之前，认真阅读本授权书以下各条款，充分了解您的权利及义务。您对所有条款的含义及相应的法律后果已全部通晓并充分理解，您自愿作出下述授权、承诺和声明。在您阅读并签署本授权书后，即表示您已充分阅读、理解并接受全部内容，并同意使用电子签名的方式确认签署本授权书，任何情况下均不得以未签署纸质授权书为由拒绝承认本授权书的法律效力。
    </p>
    <p class="art-content">
      就上海聚泛信息科技有限公司（以下简称“聚泛科技”）审核您的贷款申请期间对您相关信息的收集、保存和使用的行为，<span class="small-content">您同意并不可撤销地授权：</span>
    </p>
    <ol>
      <li class="art-list">您系具有完全民事权利能力和完全民事行为能力主体，具有签署和履行本授权书的资格和能力，能够独立承担法律责任，可以独立地作为一方诉讼主体；</li>
      <li class="art-list">您通过“容易借钱”平台向贷款人和聚泛科技提供的所有信息和资料真实、准确、完整且是最新的，不存在任何虚假记载、误导性陈述或重大遗漏；</li>
      <li class="art-list">
        为信用评估、数据处理、风险控制、逾期账款催收等任何目的从任何数据库（包括但不限于中国人民银行个人信用信息基础数据库、芝麻信用管理有限公司出具的芝麻信用报告、淘宝、天猫、京东、苏宁等网上消费平台数据库）查询您的个人信息、资产及个人征信等情况，或者向上述系统报送您个人信息；
      </li>
      <li class="art-list">
        出于审核您提交的贷款申请之需要，通过其他国内关联公司、业务合作伙伴及其他合法的来源查询、获取并使用您的个人相关信息（包括但不限于身份信息包括照片、电话信息、银行卡信息、社会保险及公积金相关信息等）；
      </li>
      <li class="art-list">
        出于审核您提交的贷款申请之需要（包括但不限于贷款申请的处理、各个阶段的贷款管理、权利的保护及执行等），提供您的个人信息和相关资信审核信息给贷款人、聚泛科技及其关联方，以及与贷款人、聚泛科技开展金融业务的合作伙伴；
      </li>
      <li class="art-list">无论您的贷款申请是否通过，同意聚泛科技有权根据相关规定妥善保存并在上述授权的范围内使用您的个人信息、个人征信信息以及提供的相关文件；</li>
      <li class="art-list">聚泛科技为向您提供贷款相关的技术及客户服务等目的可以通过任何方式使用其信息联系您或者授权第三方联系您；</li>
      <li class="art-list">依据法律法规规定在必要情况下有权将您逾期付款情况及个人信息向相关第三方披露，由此产生的您不良信用记录或不利影响及后果由您自行承担。</li>
    </ol>
    <p class="art-content"><span class="small-content">您同意并确认，</span>您对上述授权事项没有任何异议，聚泛科技在前述授权范围内收集、保存和使用您信息的行为系经您充分授权的合法行为，您自愿承担聚泛科技从事该等授权行为所产生的后果，不会就聚泛科技的收集、保存或使用行为向聚泛科技或聚泛科技的关联方、合作方提出任何不利权利主张，聚泛科技或聚泛科技的关联方、合作方无需为此向您承担任何侵权责任或者赔偿责任。
    </p>
    <p class="art-content"><span class="small-content">本授权书有效期间，未经聚泛科技事先书面同意，您不得擅自终止、变更或撤销本授权书项下任何授权事项。</span></p>
    <p class="art-content"><span class="small-content">本授权书自您以电子签名方式签署之日起生效，至聚泛科技完成本授权书项下全部授权事项之日终止。</span></p>
    <p class="art-info">姓名：{{info.name}}</p>
    <p class="art-info">联系电话：{{info.phone}}</p>
    <p class="art-info">证件名称及号码：{{info.idNo}}</p>
    <p class="art-info">签署日期：{{info.date}}</p>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        info: {
          name: '',
          phone: '',
          idNo: '',
          date: ''
        }
      }
    }
  }
</script>

<style lang="less">
  .gao-authorization {
    margin-bottom: 12px;
    .art-title {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      margin-top: 8px;
      margin-bottom: 12px;
    }
    .art-content {
      text-indent: 30px;
    }
    .art-content, .art-list {
      padding: 0 8px;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 14px;
      .small-content {
        text-indent: 0px;
        font-weight: lighter;
      }
    }
    .art-info {
      text-indent: 0px;
      font-weight: lighter;
      font-size: 13px;
      line-height: 16px;
      padding-left: 8px;
    }
    .art-list {
      padding: 0 8px 0 0;
    }
  }
</style>
