import aws from 'aws-sdk';

const ssm = new aws.SSM({ region: 'us-east-1' });

export async function getParameterFromSystemManager(parameter_name: string) {
  return ssm
    .getParameter({
      Name: parameter_name,
    })
    .promise()
    .catch((err: aws.AWSError) => {
      console.error('Failed getting parameter');
      console.error(err);
    });
}
